export default function GlowBackground() {
    return (
      <>
        <div className="absolute left-1/2 top-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-dvl-accent/10 blur-[140px]" />
  
        <div className="absolute right-0 top-1/3 h-[300px] w-[300px] rounded-full bg-blue-500/10 blur-[120px]" />
      </>
    );
  }