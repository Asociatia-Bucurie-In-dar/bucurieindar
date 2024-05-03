function loadScript(src: string, id: string, callback?: () => void): void {
    if (!document.getElementById(id)) {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.id = id;
        script.onload = () => { if (callback) callback(); };
        script.onerror = () => { console.error(`Failed to load the script: ${src}`); };
        document.head.appendChild(script);
    }
}

export default loadScript;
