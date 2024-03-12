'use client';

import { useRouter } from 'next/navigation'

interface loginButtonProps {
    children: React.ReactNode;
    mode?: "modal" | "redirect",
    asChild?: boolean;
};

export const LoginButton = ({
    children,
    mode = "redirect",
    asChild
}: loginButtonProps) => {
    const router = useRouter();

    const onClick = () => {
        router.push("/auth/login")
    }
    if (mode == "modal") {
        return (
            <span>
                TODO:imlement modal
            </span>
        )
    }
    return (
        <span onClick={onClick}>
            {children}
        </span>
    )
}