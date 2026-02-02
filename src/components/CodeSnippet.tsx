import React, {useEffect, useRef} from "react";
import Prism from 'prismjs';
import 'prismjs/components/prism-kotlin';
import 'prismjs/components/prism-gradle';
import 'prismjs/components/prism-toml';
import '/ic_check.svg';
import '/ic_copy.svg';

interface CodeSnippetProps {
    code: string;
    language: string;
}

const Code: React.FC<CodeSnippetProps> = ({code, language}) => {
    const codeRef = useRef<HTMLElement>(null);

    useEffect(() => {
        if (codeRef.current) {
            Prism.highlightElement(codeRef.current);
        }
    }, [code, language]);

    return (
        <pre
            className={`language-${language} no-scrollbar leading-1`}>
            <code ref={codeRef} className={`language-${language}`}>
            {code.trim()}
            </code>
        </pre>
    );
};

const CodeSnippet: React.FC<CodeSnippetProps> = ({code, language}) => {
    const [copied, setCopied] = React.useState(false);

    const handleCopy = (text: string) => {
        // noinspection JSIgnoredPromiseFromCall
        navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="relative group bg-zinc-50 p-4 rounded-sm text-xs text-zinc-500 border border-zinc-100 font-mono focus:border-emerald-500/50 outline-none">
            <Code code={code} language={language}/>

            <button
                onClick={() => handleCopy(code)}
                className="absolute top-1 right-1 p-1 bg-zinc-100 hover:bg-emerald-100 rounded-lg transition-colors text-white z-10"
                title="Copy implementation"
            >
                {copied ? <img src="/ic_check.svg" alt="check" className="w-4 h-4"/> : <img src="/ic_copy.svg" alt="check" className="w-4 h-4"/>}
            </button>
        </div>
    );
};

export default CodeSnippet;