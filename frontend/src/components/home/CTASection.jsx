import React from "react";
import { Link } from "react-router-dom";
import Container from "../common/Container";
import GlowButton from "../common/GlowButton";

function CTASection() {
  return (
    <section className="py-20 bg-[#0a0a0a] border-t border-white/5 text-center">
      <Container>
        
        <div className="max-w-2xl mx-auto p-8 rounded bg-[#121212]/50 border border-white/5">
          
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4 uppercase tracking-wider font-['Orbitron']">
            Need a Full Stack Solution?
          </h2>

          <p className="text-sm text-gray-400 mb-8 max-w-lg mx-auto leading-relaxed">
            I build responsive frontend architectures, RESTful APIs, and secure database connections. Connect with me today!
          </p>

          <Link to="/contact">
            <GlowButton variant="red">
              Get In Touch
            </GlowButton>
          </Link>

        </div>

      </Container>
    </section>
  );
}

export default CTASection;
