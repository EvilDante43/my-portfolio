import React from "react";
import { Link } from "react-router-dom";
import GlowButton from "../components/common/GlowButton";
import Spotlight from "../components/ui/Spotlight";

function NotFound() {
  return (
    <div className="relative min-h-screen bg-[#070708] flex flex-col items-center justify-center text-center p-6 overflow-hidden">
      <Spotlight />

      <div className="max-w-md p-8 rounded-lg border border-red-500/20 bg-red-950/5 relative space-y-6">
        
        {/* Core HUD status flashing */}
        <div className="flex justify-center">
          <span className="h-16 w-16 rounded-full border border-red-500/30 flex items-center justify-center text-red-500 animate-pulse font-bold text-2xl">
            !
          </span>
        </div>

        <h1 className="font-['Orbitron'] text-3xl font-extrabold text-white tracking-widest uppercase">
          404: Sector Lost
        </h1>

        <p className="text-sm text-gray-400 font-mono leading-relaxed uppercase">
          [ ERROR CODE: ERR_HUD_SECTOR_NOT_FOUND ] <br />
          The blueprint directory coordinate you requested does not exist or has been archived by Stark security.
        </p>

        <div className="pt-4">
          <Link to="/">
            <GlowButton variant="red" className="w-full">
              [ RETURN TO BASE CORE ]
            </GlowButton>
          </Link>
        </div>

      </div>
    </div>
  );
}

export default NotFound;