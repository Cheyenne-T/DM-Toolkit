"use client";
import { Button } from "./_components/button.component";

export default function Playground(){
    return (
        <div>
            <Button className="py-1 px-2" onClick={() => console.log("Button clicked!")}>Hello world</Button>
        </div>

    )
}