import { ThemeToggle } from "@/components/ThemeToggle"
import { StarBackground } from '@/components/StarBackground';
import { Footer } from '@/components/Footer'
import { Navbar } from "@/components/Navbar";

export const Writeup2 = () => {
    return (<div className="min-h-screen bg-background text-foreground overflow-x-hidden">

        {/* Theme Toggle */}
            <ThemeToggle />
        {/* Background Effects */}
            <StarBackground />

            <Navbar />
            
        {/* Writeups */}
        <div id="writeup1" className="relative min-h-screen px-4">
            <div id="hero" className="container max-w-6xl mx-auto z-10">
                <h1 className="text-4xl md:text-6xl pt-50 pb-10 font-bold tracking-tight">
                    Neighbour
                </h1>
                
                <p className="text-left text-muted-foreground p-4">
                    This one was a bit too easy, especially with the hint they've given. I shouldn't even put this on my blog,
                    but I just want to fill up my writeups page.
                    </p>
                
                <p className="text-left text-muted-foreground p-4">
                    Just a simple login page with an option to login to guest.
                </p>

                <img
                    src='/assets/writeup2/writeup2-1.png'
                    alt='img1'
                    className="mx-auto"
                />

                <p className="text-left text-muted-foreground p-4">
                    I was tempted to brute force the admin login in the background, but there's a reason this challenge is
                    called neighbour and gave us an IDOR hint. Using the guest account shortcut takes us to a source page:
                </p>

                <img
                    src='/assets/writeup2/writeup2-2.png'
                    alt='img2'
                    className="mx-auto"
                />

                <p className="text-left text-muted-foreground p-4">
                    Login with guest credentials takes us to a page, with a very clear IDOR exploit in the URL.
                </p>

                <img
                    src='/assets/writeup2/writeup2-3.png'
                    alt='img3'
                    className="mx-auto pb-3.5"
                />

                <p className="text-left text-muted-foreground p-4">
                    The flag is revealed once you replace guest with admin.
                </p>
            </div>
        </div>

        {/* Footer */}
            <Footer />
    </div>)
}