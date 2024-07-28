import Image from "next/image";

export default function Home() {
  return (
    
    <div>
      <Image
        src="/images/nextjs.png"
        alt="Next.js Logo"
        width={200}
        height={200}
      />
      <h1>Next.js + Shadcn Design</h1>
      <p>
        Get started by editing <code>src/pages/index.tsx</code>
      </p>
    </div>
  );
}
