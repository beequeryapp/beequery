import Image from "next/image";

export default function Home() {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center p-8">
            <main className="flex max-w-xs flex-col items-start text-start">
                <div className="flex items-center gap-2">
                    <Image src="/logo.svg" alt="BeeQuery" width={36} height={36} />
                    <h1 className="text-2xl font-bold">BeeQuery</h1>
                </div>
                <p className="text-muted-foreground text-md mt-4">
                    The{" "}
                    <span className="hover:decoration-primary hover:bg-primary/20 hover:text-primary rounded-sm px-0.5 underline underline-offset-4 transition-all duration-150">
                        <a href="https://github.com/beequeryapp/beequery">open-source</a>
                    </span>{" "}
                    database management tool for modern developers.
                </p>
            </main>
        </div>
    );
}
