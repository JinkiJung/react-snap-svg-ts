import { useEffect } from 'react';
// take Snap-SVG from snapsvg-cjs
const Snap = require('snapsvg-cjs');

export interface ISnapCanvas {
    width: string;
    height: string;
    onCreate: (s: Snap.Paper)=>void;
}

export const SnapCanvas = ({width, height, onCreate}: ISnapCanvas) => {
    useEffect(() => {
        // initializer
        const s:Snap.Paper = Snap(document.getElementById('snapcanvas') as unknown as SVGElement);
        onCreate(s);
    })

    return <svg
        width={width}
        height={height}
        id="snapcanvas"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
    />;
}