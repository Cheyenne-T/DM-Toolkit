import { clsx } from "clsx";

export function Button({children, onClick, className}: {children: React.ReactNode; onClick: () => void; className?: string}){
    return (
    <button type="button" className={clsx("bg-red font-sans rounded-sm cursor-pointer", className)} onClick={onClick}>
        {children}
    </button>
    );
}