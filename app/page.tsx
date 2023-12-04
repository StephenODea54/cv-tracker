// Module Imports
import Link from 'next/link';
import { Menu } from 'lucide-react';

// Components
import {
    Button,
    NavLink,
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from '@/components/ui';

export default function Home() {
    return (
        <div className='flex flex-col'>
            <div className='flex w-full items-center justify-between p-6 shadow'>
                <h1 className='text-2xl font-black tracking-tight'>
                    CV Tracker
                </h1>
                <div className='hidden md:flex md:items-center md:gap-5'>
                    <NavLink href='/features'>Features</NavLink>
                    <NavLink href='/pricing'>Pricing</NavLink>
                    <Button asChild>
                        <Link href='/signup'>Get Started</Link>
                    </Button>
                </div>
                <div className='block md:hidden'>
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button
                                className='text-foreground/60 hover:bg-transparent hover:text-foreground/80'
                                variant='ghost'
                            >
                                <Menu />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side='top'>
                            <SheetTitle>
                                <h1 className='text-2xl font-black tracking-tight'>
                                    CV Tracker
                                </h1>
                            </SheetTitle>
                            <div className='flex flex-col items-center gap-7 py-10'>
                                <NavLink
                                    href='/features'
                                    className='text-xl'
                                >
                                    Features
                                </NavLink>
                                <NavLink
                                    href='/pricing'
                                    className='text-xl'
                                >
                                    Pricing
                                </NavLink>
                                <Button
                                    className='text-xl'
                                    size='lg'
                                >
                                    <Link href='/signup'>Get Started</Link>
                                </Button>
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </div>
    );
}
