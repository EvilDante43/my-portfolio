import { useState, useRef, useEffect } from "react";
import Container from "../common/Container";

function TerminalSection() {
  const [history, setHistory] = useState([
    { text: "J.A.R.V.I.S. Interactive terminal v2.0 activated.", type: "system" },
    { text: "Type 'help' to view all secure commands.", type: "info" },
  ]);
  const [inputVal, setInputVal] = useState("");
  const [reactorSurge, setReactorSurge] = useState(false);
  const terminalEndRef = useRef(null);

  useEffect(() => {
    // Scroll to bottom on updates
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (e) => {
    if (e.key === "Enter") {
      const command = inputVal.trim().toLowerCase();
      const newHistory = [...history, { text: `guest@jarvis:~$ ${inputVal}`, type: "command" }];
      setInputVal("");

      if (!command) {
        setHistory(newHistory);
        return;
      }

      switch (command) {
        case "help":
          newHistory.push({
            text: `Available system commands:
  help         - Lists all operational directives
  about        - Displays authorized pilot bio parameters
  skills       - Loads core programming power grids
  arc-reactor  - Initiates core surge sequence
  contact      - Prints secure link coordinates
  clear        - Wipes terminal diagnostic log history`,
            type: "output",
          });
          break;

        case "about":
          newHistory.push({
            text: `Authorized Bio: Soumya Shukla
Role: Full Stack Web Developer & CS Undergraduate
Focus: Designing high-performance backend pipelines and responsive React architectures.
Mission: Seeking Software Development Engineer roles to build next-generation applications.`,
            type: "output",
          });
          break;

        case "skills":
          newHistory.push({
            text: `Core Programming Power Grids:
  Languages:     [████████████████░░] 90% (Java, JS, TS, SQL)
  Frameworks:    [█████████████████░] 95% (React, Node, Express)
  Databases:     [████████████████░░] 92% (MongoDB, Postgres, MySQL)
  Libraries:     [████████████████░░] 90% (JWT, Zod, Tailwind, Axios)`,
            type: "output",
          });
          break;

        case "arc-reactor":
          setReactorSurge(true);
          newHistory.push({ text: "WARNING: CORE INITIATING DISCHARGE SEQUENCE. POWER LEVELS CRITICAL.", type: "warn" });
          newHistory.push({ text: "SURGE POWER ROUTED TO REPEL RAYS. SECURING SYSTEM MATRIX.", type: "info" });
          setTimeout(() => {
            setReactorSurge(false);
          }, 1500);
          break;

        case "contact":
          newHistory.push({
            text: `Secure Coordinates:
  Email:   soumyashukla08april@gmail.com
  Phone:   +91 7879227757
  Location: Bhopal, India`,
            type: "output",
          });
          break;

        case "clear":
          setHistory([]);
          return;

        default:
          newHistory.push({
            text: `Directive '${command}' not found. Type 'help' for available system logs.`,
            type: "error",
          });
      }

      setHistory(newHistory);
    }
  };

  return (
    <section className="py-20 relative overflow-hidden border-t border-white/5 bg-black/40">
      <Container>
        
        {/* Visual system flare alert */}
        {reactorSurge && (
          <div className="absolute inset-0 z-50 pointer-events-none bg-cyan-500/10 border-4 border-cyan-400 animate-pulse transition-all duration-300" />
        )}

        <div className="max-w-4xl mx-auto rounded-lg border border-red-500/20 bg-black/90 shadow-[0_0_20px_rgba(226,27,34,0.1)] overflow-hidden">
          
          {/* Terminal Title Bar */}
          <div className="flex justify-between items-center bg-red-950/20 border-b border-red-500/10 px-4 py-2 text-[10px] font-['Orbitron'] tracking-wider text-[#ffd700]">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-red-600 animate-pulse" />
              <span>JARVIS_SHELL.EXE</span>
            </div>
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
              <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
              <span className="w-2.5 h-2.5 rounded-full bg-red-600/60" />
            </div>
          </div>

          {/* Scrolling Screen Area */}
          <div className="p-5 h-80 overflow-y-auto font-mono text-xs md:text-sm text-gray-300 space-y-2 bg-[#050507]">
            {history.map((log, idx) => {
              const colors = {
                system: "text-[#00f0ff] font-semibold",
                info: "text-[#ffd700]",
                command: "text-white",
                output: "text-gray-400 whitespace-pre-wrap leading-relaxed",
                warn: "text-red-500 font-semibold animate-pulse",
                error: "text-red-600 font-bold",
              };
              return (
                <div key={idx} className={colors[log.type] || "text-gray-300"}>
                  {log.text}
                </div>
              );
            })}
            <div ref={terminalEndRef} />
          </div>

          {/* Prompt Entry Box */}
          <div className="flex items-center gap-2 px-5 py-3 border-t border-white/5 bg-[#050507] font-mono text-xs md:text-sm">
            <span className="text-[#00f0ff] select-none">guest@jarvis:~$</span>
            <input
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              onKeyDown={handleCommand}
              className="flex-1 bg-transparent border-none outline-none text-white font-mono caret-[#ffd700]"
              placeholder="Enter directive..."
              autoFocus
            />
          </div>

        </div>

      </Container>
    </section>
  );
}

export default TerminalSection;
