"use client";

import React, { useRef, useEffect, useState } from "react";
import "@toast-ui/editor/dist/toastui-editor.css";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { Copy, Check } from "lucide-react";

// Dynamically import Editor so it loads only in the browser
const Editor = dynamic(
  () => import("@toast-ui/react-editor").then((mod) => mod.Editor),
  { ssr: false }
);

const OutputSection = ({ output }: { output: string }) => {
  const editorRef = useRef<any>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (editorRef.current) {
      editorRef.current
        .getInstance()
        .setMarkdown(output || "Your Result Will Appear Here!");
    }
  }, [output]);

  const handleCopy = () => {
    const text = editorRef.current.getInstance().getMarkdown();
    navigator.clipboard.writeText(text);
    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-white shadow-lg border rounded-lg">
      <div className="flex justify-between items-center p-3">
        <h2 className="font-bold text-2xl text-purple-600">Your Result</h2>
        <Button
          className="bg-purple-600 hover:bg-green-600 flex items-center gap-1"
          onClick={handleCopy}
        >
          {copied ? <Check /> : <Copy />} {copied ? "Copied!" : "Copy"}
        </Button>
      </div>
      <Editor
        ref={editorRef}
        initialValue="Your Result Will Appear Here!"
        height="500px"
        initialEditType="wysiwyg"
        useCommandShortcut={true}
      />
    </div>
  );
};

export default OutputSection;







// "use client";
// import React, { useRef, useEffect, useState } from "react";
// import "@toast-ui/editor/dist/toastui-editor.css";
// import { Editor } from "@toast-ui/react-editor";
// import { Button } from "@/components/ui/button";
// import { Copy, Check } from "lucide-react";

// const OutputSection = ({ output }: { output: string }) => {
//   const editorRef = useRef<any>(null);
//   const [copied, setCopied] = useState(false);

//   useEffect(() => {
//     if (editorRef.current) {
//       editorRef.current
//         .getInstance()
//         .setMarkdown(output || "Your Result Will Appear Here!");
//     }
//   }, [output]);

//   const handleCopy = () => {
//     const text = editorRef.current.getInstance().getMarkdown();
//     navigator.clipboard.writeText(text);
//     setCopied(true);

//     // Reset icon back to Copy after 2 seconds
//     setTimeout(() => setCopied(false), 2000);
//   };

//   return (
//     <div className="bg-white shadow-lg border rounded-lg">
//       <div className="flex justify-between items-center p-3">
//         <h2 className="font-bold text-2xl text-purple-600">Your Result</h2>
//         <Button
//           className="bg-purple-600 hover:bg-green-600 flex items-center gap-1"
//           onClick={handleCopy}
//         >
//           {copied ? <Check /> : <Copy />} {copied ? "Copied!" : "Copy"}
//         </Button>
//       </div>
//       <Editor
//         ref={editorRef}
//         initialValue="Your Result Will Appear Here!"
//         height="500px"
//         initialEditType="wysiwyg"
//         useCommandShortcut={true}
//       />
//     </div>
//   );
// };

// export default OutputSection;








// "use client";
// import React, { useRef, useEffect } from "react";
// import "@toast-ui/editor/dist/toastui-editor.css";
// import { Editor } from "@toast-ui/react-editor";
// import { Button } from "@/components/ui/button";
// import { Copy } from "lucide-react";

// const OutputSection = ({ output }: { output: string }) => {
//   const editorRef = useRef<any>(null);

//   useEffect(() => {
//     if (editorRef.current) {
//       editorRef.current.getInstance().setMarkdown(output || "Your Result Will Appear Here!");
//     }
//   }, [output]);

//   return (
//     <div className="bg-white shadow-lg border rounded-lg">
//       <div className="flex justify-between items-center p-3">
//         <h2 className="font-bold text-2xl text-purple-600">Your Result</h2>
//         <Button
//           className="bg-purple-600 hover:bg-green-600"
//           onClick={() => {
//             const text = editorRef.current.getInstance().getMarkdown();
//             navigator.clipboard.writeText(text);
//           }}
//         >
//           <Copy /> Copy
//         </Button>
//       </div>
//       <Editor
//         ref={editorRef}
//         initialValue="Your Result Will Appear Here!"
//         height="500px"
//         initialEditType="wysiwyg"
//         useCommandShortcut={true}
//       />
//     </div>
//   );
// };

// export default OutputSection;









// import React, { useRef } from "react";
// import "@toast-ui/editor/dist/toastui-editor.css";
// import { Editor } from "@toast-ui/react-editor";
// import { Button } from "@/components/ui/button";
// import { Copy } from "lucide-react";

// const OutputSection = () => {
//   const editorRef:any=useRef();
//   return (
//     <div className="bg-white shadow-lg border rounded-lg">
//       <div className="flex justify-between items-center p-3">
//         <h2 className="font-bold text-2xl text-purple-600">Your Result</h2>
//         <Button className="bg-purple-600 hover:bg-green-600">
//           <Copy /> Copy
//         </Button>
//       </div>
//       <Editor
//       ref={editorRef}
//         initialValue="Your Result Will Appear Here!"
//         height="500px"
//         initialEditType="wysiwyg"
//         useCommandShortcut={true}
//         onChange={()=>console.log(editorRef.current.getInstance().getMarkdown())}
//       />
//     </div>
//   );
// };

// export default OutputSection;
