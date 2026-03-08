import { useState, useRef, useEffect } from 'react';

const MUSIC_URL = "https://raw.githubusercontent.com/Charmingdc/Relaxation-tracks/main/src/sounds/sad/emotional-piano-sad.mp3";

const FloatingHeart = ({ style, delay, duration, size }: { style?: React.CSSProperties; delay: number; duration: number; size: number }) => (
  <span
    className="animate-float-up absolute text-primary pointer-events-none select-none"
    style={{ animationDelay: `${delay}s`, animationDuration: `${duration}s`, fontSize: size, bottom: '-20px', ...style }}
  >
    💕
  </span>
);

const Sparkle = ({ style, delay }: { style?: React.CSSProperties; delay: number }) => (
  <span
    className="animate-sparkle absolute pointer-events-none select-none"
    style={{ animationDelay: `${delay}s`, ...style }}
  >
    ✨
  </span>
);

const Index = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(MUSIC_URL);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.4;
    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };
  const floatingHearts = Array.from({ length: 12 }, (_, i) => ({
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 8,
    duration: 6 + Math.random() * 6,
    size: 14 + Math.random() * 20,
  }));

  const sparkles = Array.from({ length: 8 }, (_, i) => ({
    left: `${10 + Math.random() * 80}%`,
    top: `${10 + Math.random() * 80}%`,
    delay: Math.random() * 4,
    fontSize: '1rem',
  }));

  return (
    <div className="relative min-h-screen bg-floral-gradient overflow-hidden">
      {/* Music toggle button */}
      <button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110"
        style={{
          background: 'linear-gradient(135deg, hsl(var(--primary)), hsl(var(--rose-gold)))',
          color: 'hsl(var(--primary-foreground))',
        }}
        aria-label={isPlaying ? 'Tắt nhạc' : 'Bật nhạc'}
      >
        <span className="text-2xl">{isPlaying ? '🔊' : '🔇'}</span>
      </button>

      {/* Floating hearts */}
      {floatingHearts.map((h, i) => (
        <FloatingHeart key={i} delay={h.delay} duration={h.duration} size={h.size} style={{ left: h.left }} />
      ))}

      {/* Sparkles */}
      {sparkles.map((s, i) => (
        <Sparkle key={i} delay={s.delay} style={{ left: s.left, top: s.top, fontSize: s.fontSize }} />
      ))}

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center px-4 py-8 md:py-12">

        {/* Floral Banner */}
        <div className="relative w-full max-w-2xl text-center mb-8">
          {/* Decorative flowers top */}
          <div className="flex justify-center items-center gap-2 mb-4 text-3xl md:text-4xl animate-sway">
            <span>🌸</span>
            <span>🌷</span>
            <span>🌹</span>
            <span className="animate-float-gentle">💐</span>
            <span>🌹</span>
            <span>🌷</span>
            <span>🌸</span>
          </div>

          {/* Hearts row */}
          <div className="flex justify-center gap-3 mb-3 text-xl">
            <span className="animate-glow-pulse text-primary" style={{ animationDelay: '0s' }}>♥</span>
            <span className="animate-glow-pulse text-primary" style={{ animationDelay: '0.3s' }}>♥</span>
            <span className="animate-glow-pulse text-primary" style={{ animationDelay: '0.6s' }}>♥</span>
          </div>

          {/* Main title */}
          <h1 className="font-script text-4xl md:text-6xl lg:text-7xl text-primary leading-tight mb-2">
            Chúc Mừng Ngày
          </h1>
          <p className="font-script text-3xl md:text-5xl lg:text-6xl text-primary mb-2">
            Quốc Tế Phụ Nữ
          </p>

          {/* 8/3 badge */}
          <div className="inline-flex items-center gap-2 mt-2 mb-4">
            <span className="text-2xl">🌺</span>
            <span className="font-dancing text-5xl md:text-7xl font-bold" style={{ color: 'hsl(var(--copper))' }}>
              8/3
            </span>
            <span className="text-2xl">🌺</span>
          </div>

          {/* Bottom flower decoration */}
          <div className="flex justify-center items-center gap-1 text-2xl mt-2">
            <span>🌿</span>
            <span>🌻</span>
            <span>🌸</span>
            <span>💮</span>
            <span>🌸</span>
            <span>🌻</span>
            <span>🌿</span>
          </div>
        </div>

        {/* Circular Photo Frame */}
        <div className="copper-frame mb-10">
          <div className="w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden">
            <img
              src="/mom-photo.jpg"
              alt="Mẹ yêu"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Message Section */}
        <div className="relative max-w-xl text-center px-6 py-8 rounded-2xl" style={{ background: 'hsla(340, 30%, 97%, 0.8)', backdropFilter: 'blur(8px)' }}>
          {/* Decorative corners */}
          <span className="absolute top-2 left-3 text-2xl animate-float-gentle" style={{ animationDelay: '0.5s' }}>🌹</span>
          <span className="absolute top-2 right-3 text-2xl animate-float-gentle" style={{ animationDelay: '1s' }}>🌹</span>
          <span className="absolute bottom-2 left-3 text-xl animate-glow-pulse">⭐</span>
          <span className="absolute bottom-2 right-3 text-xl animate-glow-pulse" style={{ animationDelay: '1s' }}>⭐</span>

          {/* Heading */}
          <h2 className="font-script text-4xl md:text-5xl text-primary mb-6">
            Mẹ Kính Yêu
          </h2>

          {/* Divider */}
          <div className="flex justify-center items-center gap-2 mb-6">
            <div className="h-px w-12 bg-primary/30"></div>
            <span className="text-primary text-sm">♥</span>
            <div className="h-px w-12 bg-primary/30"></div>
          </div>

          {/* Message body */}
          <p className="font-dancing text-xl md:text-2xl leading-relaxed text-foreground mb-6" style={{ lineHeight: '2' }}>
            Nhân ngày Quốc tế Phụ nữ 8/3, con chúc mẹ luôn mạnh khỏe, hạnh phúc, và mãi là người phụ nữ tuyệt vời nhất của con.
          </p>

          <p className="font-dancing text-xl md:text-2xl leading-relaxed text-foreground mb-8" style={{ lineHeight: '2' }}>
            Cảm ơn mẹ vì tất cả sự hy sinh và yêu thương.
            <br />
            <span className="text-primary font-semibold">Con yêu mẹ rất nhiều!</span>
          </p>

          {/* Heart icon */}
          <div className="flex justify-center mb-6">
            <span className="text-4xl animate-glow-pulse">💝</span>
          </div>

          {/* Signature */}
          <div className="border-t border-primary/20 pt-4">
            <p className="font-dancing text-2xl md:text-3xl text-foreground font-semibold">
              — Nguyễn Lương Minh Thông —
            </p>
            <p className="font-dancing text-lg text-muted-foreground mt-1">
              8/3/2026
            </p>
          </div>
        </div>

        {/* Bottom decorations */}
        <div className="flex justify-center items-center gap-3 mt-10 text-3xl animate-sway">
          <span>🌸</span>
          <span>💕</span>
          <span>🌷</span>
          <span>💕</span>
          <span>🌸</span>
        </div>

        {/* Cozy elements */}
        <div className="mt-6 mb-8 flex justify-center gap-4 text-2xl">
          <span className="animate-float-gentle">🧸</span>
          <span className="animate-float-gentle" style={{ animationDelay: '0.5s' }}>🌹</span>
          <span className="animate-float-gentle" style={{ animationDelay: '1s' }}>💌</span>
        </div>
      </div>
    </div>
  );
};

export default Index;
