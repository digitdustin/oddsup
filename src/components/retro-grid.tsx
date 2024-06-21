import { cn } from "@/lib/utils";

export default function RetroGrid({ className }: { className?: string }) {
  return (
    <div
      style={{
        WebkitMaskImage: "linear-gradient(rgba(0,0,0,0) 40%, #000 100%)",
      }}
      className={cn(
        "pointer-events-none absolute h-full w-full overflow-hidden opacity-50 [perspective:200px]",
        className
      )}
    >
      {/* Grid */}
      <div className="absolute inset-0 [transform:rotateX(35deg)]">
        <div
          className={cn(
            "animate-grid",

            "[background-repeat:repeat] [background-size:60px_60px] [height:300vh] [inset:0%_0px] [margin-left:-50%] [transform-origin:100%_0_0] [width:600vw]",

            // Light Styles
            "[background-image:linear-gradient(to_right,rgba(114,105,255,0.3)_1px,transparent_0),linear-gradient(to_bottom,rgba(114,105,255,0.3)_1px,transparent_0)]",

            // Dark styles
            "dark:[background-image:linear-gradient(to_right,rgba(114,105,255,0.2)_1px,transparent_0),linear-gradient(to_bottom,rgba(114,105,255,0.2)_1px,transparent_0)]"
          )}
        />
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/10 to-transparent to-90% dark:from-black" />
    </div>
  );
}
