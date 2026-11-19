import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import GlowButton from "../components/common/GlowButton";
import Container from "../components/common/Container";
import { login as loginAPI, logout as logoutAPI, checkAuth } from "../services/authService";
import { getProjects, createProject, updateProject, deleteProject } from "../services/projectService";

function Admin() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [adminUser, setAdminUser] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  // Dashboard states
  const [dbProjects, setDbProjects] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editId, setEditId] = useState(null);
  
  // Form fields
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [techStackInput, setTechStackInput] = useState("");
  const [image, setImage] = useState("");
  const [liveLink, setLiveLink] = useState("");
  const [githubLink, setGithubLink] = useState("");
  const [category, setCategory] = useState("Full Stack");
  const [featured, setFeatured] = useState(false);

  useEffect(() => {
    const checkSession = async () => {
      try {
        const res = await checkAuth();
        if (res && res.success) {
          setIsLoggedIn(true);
          setAdminUser(res.user);
          fetchAdminProjects();
        }
      } catch (err) {
        setIsLoggedIn(false);
      }
    };
    checkSession();
  }, []);

  const fetchAdminProjects = async () => {
    try {
      const data = await getProjects();
      if (data && data.success) {
        setDbProjects(data.projects);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to fetch project listings.");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("Please fill in all credentials.");
      return;
    }

    const toastId = toast.loading("Logging in...");
    try {
      const data = await loginAPI(email, password);
      if (data.success) {
        toast.success("Login successful!", { id: toastId });
        setIsLoggedIn(true);
        setAdminUser(data.user);
        fetchAdminProjects();
      }
    } catch (error) {
      console.error(error);
      toast.error("Invalid email or password.", { id: toastId });
    }
  };

  const handleLogout = async () => {
    try {
      await logoutAPI();
      toast.success("Logged out successfully.");
      setIsLoggedIn(false);
      setAdminUser(null);
    } catch (error) {
      toast.error("Failed to logout.");
    }
  };

  const handleEditClick = (proj) => {
    setEditId(proj._id);
    setTitle(proj.title);
    setDescription(proj.description);
    setTechStackInput(proj.techStack.join(", "));
    setImage(proj.image);
    setLiveLink(proj.liveLink || "");
    setGithubLink(proj.githubLink || "");
    setCategory(proj.category || "Full Stack");
    setFeatured(proj.featured || false);
    setShowForm(true);
  };

  const handleDeleteClick = async (id) => {
    if (!window.confirm("Are you sure you want to delete this project?")) return;
    try {
      await deleteProject(id);
      toast.success("Project deleted successfully.");
      fetchAdminProjects();
    } catch (err) {
      toast.error("Failed to delete project.");
    }
  };

  const handleSubmitProject = async (e) => {
    e.preventDefault();
    if (!title || !description || !image) {
      toast.error("Please fill in required fields.");
      return;
    }

    const techStack = techStackInput
      .split(",")
      .map((t) => t.trim())
      .filter((t) => t.length > 0);

    const projectPayload = {
      title,
      description,
      techStack,
      image,
      liveLink,
      githubLink,
      category,
      featured,
    };

    try {
      if (editId) {
        await updateProject(editId, projectPayload);
        toast.success("Project updated successfully.");
      } else {
        await createProject(projectPayload);
        toast.success("Project created successfully.");
      }
      resetForm();
      fetchAdminProjects();
    } catch (err) {
      toast.error("Failed to save project.");
    }
  };

  const resetForm = () => {
    setShowForm(false);
    setEditId(null);
    setTitle("");
    setDescription("");
    setTechStackInput("");
    setImage("");
    setLiveLink("");
    setGithubLink("");
    setCategory("Full Stack");
    setFeatured(false);
  };

  if (!isLoggedIn) {
    return (
      <div className="relative min-h-screen bg-[#070708] flex items-center justify-center p-6 overflow-hidden">
        <div className="w-full max-w-sm p-8 rounded bg-[#121212] border border-white/5 shadow-xl">
          
          <div className="text-center mb-6">
            <h1 className="text-lg font-bold text-white tracking-widest font-['Orbitron']">
              Admin Access
            </h1>
            <p className="text-[10px] text-gray-500 font-mono tracking-wider mt-1 uppercase">
              // Credentials Verification
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4 font-sans">
            <div className="space-y-1">
              <label className="block text-[10px] font-mono text-gray-400">// Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-black/45 border border-white/10 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-red-500"
                placeholder="admin@stark.com"
              />
            </div>

            <div className="space-y-1">
              <label className="block text-[10px] font-mono text-gray-400">// Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-black/45 border border-white/10 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-red-500"
                placeholder="Password"
              />
            </div>

            <GlowButton type="submit" variant="red" className="w-full mt-2">
              Login
            </GlowButton>
          </form>

        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-[#070708] pt-32 pb-20 overflow-hidden font-sans">
      <Container>
        
        {/* Simple Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/5 pb-5 mb-8">
          <div>
            <h1 className="text-xl font-bold text-white tracking-widest font-['Orbitron']">
              Admin Dashboard
            </h1>
            <p className="text-xs text-gray-500 mt-1 font-mono">
              // Operator: {adminUser?.name || "SOUMYA"}
            </p>
          </div>
          <div className="flex gap-2">
            <GlowButton onClick={() => setShowForm(true)} variant="gold">
              Add Project
            </GlowButton>
            <GlowButton onClick={handleLogout} variant="red">
              Logout
            </GlowButton>
          </div>
        </div>

        {/* Create/Edit Form */}
        {showForm && (
          <div className="mb-10 p-6 rounded bg-[#121212] border border-white/5 space-y-4">
            <h3 className="text-sm font-bold text-white font-mono uppercase tracking-wider">
              // {editId ? "Modify Project Details" : "Create New Project"}
            </h3>

            <form onSubmit={handleSubmitProject} className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
              
              <div className="space-y-1">
                <label className="text-gray-400 font-mono">Project Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="w-full bg-black/40 border border-white/10 rounded px-3 py-2 text-white focus:outline-none"
                  placeholder="E-Commerce App"
                />
              </div>

              <div className="space-y-1">
                <label className="text-gray-400 font-mono">Category</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-neutral-900 border border-white/10 rounded px-3 py-2 text-white focus:outline-none"
                >
                  <option value="Full Stack">Full Stack</option>
                  <option value="MERN Stack">MERN Stack</option>
                </select>
              </div>

              <div className="md:col-span-2 space-y-1">
                <label className="text-gray-400 font-mono">Description</label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  required
                  rows="3"
                  className="w-full bg-black/40 border border-white/10 rounded px-3 py-2 text-white focus:outline-none resize-none"
                  placeholder="Enter specifications..."
                />
              </div>

              <div className="space-y-1">
                <label className="text-gray-400 font-mono">Tech Stack (comma separated)</label>
                <input
                  type="text"
                  value={techStackInput}
                  onChange={(e) => setTechStackInput(e.target.value)}
                  className="w-full bg-black/40 border border-white/10 rounded px-3 py-2 text-white focus:outline-none"
                  placeholder="React, Node.js, Express, MongoDB"
                />
              </div>

              <div className="space-y-1">
                <label className="text-gray-400 font-mono">Image URL</label>
                <input
                  type="text"
                  value={image}
                  onChange={(e) => setImage(e.target.value)}
                  required
                  className="w-full bg-black/40 border border-white/10 rounded px-3 py-2 text-white focus:outline-none"
                  placeholder="https://..."
                />
              </div>

              <div className="space-y-1">
                <label className="text-gray-400 font-mono">Live Link</label>
                <input
                  type="text"
                  value={liveLink}
                  onChange={(e) => setLiveLink(e.target.value)}
                  className="w-full bg-black/40 border border-white/10 rounded px-3 py-2 text-white focus:outline-none"
                  placeholder="https://..."
                />
              </div>

              <div className="space-y-1">
                <label className="text-gray-400 font-mono">GitHub Link</label>
                <input
                  type="text"
                  value={githubLink}
                  onChange={(e) => setGithubLink(e.target.value)}
                  className="w-full bg-black/40 border border-white/10 rounded px-3 py-2 text-white focus:outline-none"
                  placeholder="https://..."
                />
              </div>

              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="featured-check"
                  checked={featured}
                  onChange={(e) => setFeatured(e.target.checked)}
                  className="h-4 w-4 rounded bg-black border border-white/10 accent-red-600"
                />
                <label htmlFor="featured-check" className="text-gray-300 font-mono tracking-wider cursor-pointer">
                  Featured Project
                </label>
              </div>

              <div className="md:col-span-2 flex gap-3 justify-end pt-3">
                <GlowButton onClick={resetForm} variant="red">
                  Cancel
                </GlowButton>
                <GlowButton type="submit" variant="gold">
                  Save Project
                </GlowButton>
              </div>

            </form>
          </div>
        )}

        {/* Project Table */}
        <div className="rounded bg-[#121212]/50 border border-white/5 overflow-hidden">
          
          <div className="bg-[#181818] px-6 py-3 border-b border-white/5 text-xs text-gray-500 font-mono flex justify-between uppercase">
            <span>Blueprints Database</span>
            <span>Count: {dbProjects.length}</span>
          </div>

          <div className="divide-y divide-white/5">
            {dbProjects.length === 0 ? (
              <div className="p-6 text-center text-xs text-gray-500 font-mono">
                // No blueprints in database. Add new project listings.
              </div>
            ) : (
              dbProjects.map((proj) => (
                <div key={proj._id} className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <h4 className="text-sm font-semibold text-white font-mono flex items-center gap-2">
                      <span>{proj.title}</span>
                      {proj.featured && <span className="h-1.5 w-1.5 rounded-full bg-yellow-500" title="Featured" />}
                    </h4>
                    <p className="text-[10px] text-gray-500 mt-1 font-mono">
                      Category: {proj.category} | Stack: {proj.techStack.join(", ")}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleEditClick(proj)}
                      className="px-3 py-1 border border-yellow-500/20 hover:border-yellow-500 text-yellow-500 text-xs rounded transition-colors"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteClick(proj._id)}
                      className="px-3 py-1 border border-red-500/20 hover:border-red-500 text-red-500 text-xs rounded transition-colors"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

        </div>

      </Container>
    </div>
  );
}

export default Admin;