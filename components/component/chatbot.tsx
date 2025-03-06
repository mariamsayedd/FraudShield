//"use client";

// import { useChat } from "ai/react";
// import Markdown from "react-markdown";
// import { SendIcon, SquareIcon } from "lucide-react";

// import { Button } from "@/components/ui/button";
// import { Textarea } from "@/components/ui/textarea";
// import Image from "next/image";

// export function Chatbot() {
//   const { messages, input, handleInputChange, handleSubmit, isLoading, stop } =
//     useChat({
//       api: "api/chat",
//     });

//   return (
//     <div className="flex flex-col h-[80vh] w-full max-w-[672px] mx-auto bg-background rounded-lg shadow-lg">
//       <div className="flex-1 overflow-auto p-6">
//         {messages.length === 0 && (
//           <div className="flex flex-col justify-center items-center h-full">
//             <Image src="/ai.png" alt="AI" width={80} height={80} />
//             <p className="text-lg text-muted-foreground mt-4">
//               Welcome to the Chatbot! Ask me anything.
//             </p>
//           </div>
//         )}
//         <div className="flex flex-col gap-4">
//           {messages.map((message) =>
//             message.role === "assistant" ? (
//               <div key={message.id} className="flex items-start gap-3">
//                 <div className="p-2 border border-gray-700 rounded-full">
//                   <Image src="/ai.png" alt="AI" width={20} height={20} />
//                 </div>
//                 <div className="bg-muted rounded-lg p-3 max-w-[70%]">
//                   <Markdown className="text-sm text-muted-foreground">
//                     {message.content}
//                   </Markdown>
//                 </div>
//               </div>
//             ) : (
//               <div key={message.id} className="flex justify-end">
//                 <div className="bg-primary rounded-lg p-3 max-w-[70%]">
//                   <p className="text-sm text-primary-foreground">
//                     {message.content}
//                   </p>
//                 </div>
//               </div>
//             )
//           )}
//         </div>
//       </div>
//       <form
//         onSubmit={handleSubmit}
//         className="bg-muted/50 px-4 py-3 flex items-center gap-2"
//       >
//         <div className="relative flex-1">
//           <Textarea
//             placeholder="Type your message..."
//             className="rounded-lg pr-12 min-h-[64px]"
//             rows={1}
//             value={input}
//             onChange={handleInputChange}
//           />

//           {!isLoading ? (
//             <Button
//               type="submit"
//               size="icon"
//               disabled={!input || isLoading}
//               className="absolute bottom-3 right-3 rounded-full"
//             >
//               <SendIcon className="w-5 h-5" />
//               <span className="sr-only">Send</span>
//             </Button>
//           ) : (
//             <Button
//               type="button"
//               size="icon"
//               disabled={!isLoading}
//               onClick={stop}
//               className="absolute bottom-3 right-3 rounded-full"
//             >
//               <SquareIcon className="w-5 h-5" fill="white" />
//               <span className="sr-only">Send</span>
//             </Button>
//           )}
//         </div>
//       </form>
//     </div>
//   );
// }

// "use client";

// import { useChat } from "ai/react";
// import Markdown from "react-markdown";
// import { SendIcon, SquareIcon } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Textarea } from "@/components/ui/textarea";
// import Image from "next/image";
// import { useEffect } from "react";

// export function Chatbot() {
//   const {
//     messages,
//     input,
//     handleInputChange,
//     handleSubmit,
//     isLoading,
//     stop,
//     error,
//   } = useChat({
//     api: "http://localhost:5001/api/chat", // Ensure your backend is running on this port
//   });

//   useEffect(() => {
//     if (error) {
//       console.error("Chat API Error:", error);
//     }
//   }, [error]);

//   return (
//     <div className="flex flex-col h-[80vh] w-full max-w-[672px] mx-auto bg-background rounded-lg shadow-lg">
//       <div className="flex-1 overflow-auto p-6">
//         {messages.length === 0 ? (
//           <div className="flex flex-col justify-center items-center h-full">
//             <Image src="/ai.png" alt="AI" width={80} height={80} />
//             <p className="text-lg text-muted-foreground mt-4">
//               Welcome to the Chatbot! Ask me anything.
//             </p>
//           </div>
//         ) : (
//           <div className="flex flex-col gap-4">
//             {messages.map((message) =>
//               message.role === "assistant" ? (
//                 <div key={message.id} className="flex items-start gap-3">
//                   <div className="p-2 border border-gray-700 rounded-full">
//                     <Image src="/ai.png" alt="AI" width={20} height={20} />
//                   </div>
//                   <div className="bg-muted rounded-lg p-3 max-w-[70%]">
//                     <Markdown className="text-sm text-muted-foreground">
//                       {message.content || "No response"}
//                     </Markdown>
//                   </div>
//                 </div>
//               ) : (
//                 <div key={message.id} className="flex justify-end">
//                   <div className="bg-primary rounded-lg p-3 max-w-[70%]">
//                     <p className="text-sm text-primary-foreground">
//                       {message.content || "No message"}
//                     </p>
//                   </div>
//                 </div>
//               )
//             )}
//           </div>
//         )}
//       </div>

//       {/* Display API errors if any */}
//       {error && (
//         <div className="p-4 text-red-500 text-sm bg-red-100 border border-red-400 rounded-md mx-4">
//           {error.message || "An error occurred while processing your request."}
//         </div>
//       )}

//       {/* Chat Input */}
//       <form
//         onSubmit={handleSubmit}
//         className="bg-muted/50 px-4 py-3 flex items-center gap-2"
//       >
//         <div className="relative flex-1">
//           <Textarea
//             placeholder="Type your message..."
//             className="rounded-lg pr-12 min-h-[64px]"
//             rows={1}
//             value={input}
//             onChange={handleInputChange}
//           />

//           {!isLoading ? (
//             <Button
//               type="submit"
//               size="icon"
//               disabled={!input.trim() || isLoading}
//               className="absolute bottom-3 right-3 rounded-full"
//             >
//               <SendIcon className="w-5 h-5" />
//               <span className="sr-only">Send</span>
//             </Button>
//           ) : (
//             <Button
//               type="button"
//               size="icon"
//               disabled={!isLoading}
//               onClick={stop}
//               className="absolute bottom-3 right-3 rounded-full"
//             >
//               <SquareIcon className="w-5 h-5" fill="white" />
//               <span className="sr-only">Stop</span>
//             </Button>
//           )}
//         </div>
//       </form>
//     </div>
//   );
// }
"use client";
////////////////////////////////////////////////////////////////////

// import { useChat } from "ai/react";
// import Markdown from "react-markdown";
// import { SendIcon, SquareIcon } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import { Textarea } from "@/components/ui/textarea";
// import Image from "next/image";

// export function Chatbot() {
//   // ✅ Ensure `useChat` is properly configured
//   const { messages, input, handleInputChange, handleSubmit, isLoading, stop } =
//     useChat({
//       api: "http://localhost:5001/api/chat", // Backend API URL
//     });

//   return (
//     <div className="flex flex-col h-[80vh] w-full max-w-[672px] mx-auto bg-background rounded-lg shadow-lg">
//       <div className="flex-1 overflow-auto p-6">
//         {messages.length === 0 && (
//           <div className="flex flex-col justify-center items-center h-full">
//             <Image src="/ai.png" alt="AI" width={80} height={80} />
//             <p className="text-lg text-muted-foreground mt-4">
//               Welcome to FraudShield! Ask me anything.
//             </p>
//           </div>
//         )}
//         <div className="flex flex-col gap-4">
//           {messages.map((message) =>
//             message.role === "assistant" ? (
//               <div key={message.id} className="flex items-start gap-3">
//                 <div className="p-2 border border-gray-700 rounded-full">
//                   <Image src="/ai.png" alt="AI" width={20} height={20} />
//                 </div>
//                 <div className="bg-muted rounded-lg p-3 max-w-[70%]">
//                   <Markdown className="text-sm text-muted-foreground">
//                     {message.content}
//                   </Markdown>
//                 </div>
//               </div>
//             ) : (
//               <div key={message.id} className="flex justify-end">
//                 <div className="bg-primary rounded-lg p-3 max-w-[70%]">
//                   <p className="text-sm text-primary-foreground">
//                     {message.content}
//                   </p>
//                 </div>
//               </div>
//             )
//           )}
//         </div>
//       </div>
//       <form
//         onSubmit={handleSubmit} 
//         className="bg-muted/50 px-4 py-3 flex items-center gap-2"
//       >
//         <div className="relative flex-1">
//           <Textarea
//             placeholder="Type your message..."
//             className="rounded-lg pr-12 min-h-[64px]"
//             rows={1}
//             value={input}
//             onChange={handleInputChange} 
//           />

//           {!isLoading ? (
//             <Button
//               type="submit"
//               size="icon"
//               disabled={!input || isLoading}
//               className="absolute bottom-3 right-3 rounded-full"
//             >
//               <SendIcon className="w-5 h-5" />
//               <span className="sr-only">Send</span>
//             </Button>
//           ) : (
//             <Button
//               type="button"
//               size="icon"
//               disabled={!isLoading}
//               onClick={stop} 
//               className="absolute bottom-3 right-3 rounded-full"
//             >
//               <SquareIcon className="w-5 h-5" fill="white" />
//               <span className="sr-only">Send</span>
//             </Button>
//           )}
//         </div>
//       </form>
//     </div>
//   );
// }

///////////////////////////////////////////////////


import { useState } from "react";
import Markdown from "react-markdown";
import { SendIcon, SquareIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

export function Chatbot() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setIsLoading(true);
    setMessages((prev) => [...prev, { role: "user", content: input }]);

    try {
      const res = await fetch("http://localhost:5001/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });
      const data = await res.json();
      console.log("Received response:", data); 
      setMessages((prev) => [...prev, { role: "assistant", content: data.response || "No response from AI" }]);
    } catch (error) {
      setMessages((prev) => [...prev, { role: "assistant", content: "Error: Unable to connect to the chatbot." }]);
    } finally {
      setIsLoading(false);
      setInput("");
    }
  };

  return (
    <div className="flex flex-col h-[80vh] w-full max-w-[672px] mx-auto bg-background rounded-lg shadow-lg">
      <div className="flex-1 overflow-auto p-6">
        {messages.length === 0 && (
          <div className="flex flex-col justify-center items-center h-full">
            <Image src="/ai.png" alt="AI" width={80} height={80} />
            <p className="text-lg text-muted-foreground mt-4">
              Welcome to FraudShield! Ask me anything.
            </p>
          </div>
        )}
        <div className="flex flex-col gap-4">
          {messages.map((message, index) =>
            message.role === "assistant" ? (
              <div key={index} className="flex items-start gap-3">
                <div className="p-2 border border-gray-700 rounded-full">
                  <Image src="/ai.png" alt="AI" width={20} height={20} />
                </div>
                <div className="bg-muted rounded-lg p-3 max-w-[70%]">
                  <Markdown className="text-sm text-muted-foreground">
                    {message.content}
                  </Markdown>
                </div>
              </div>
            ) : (
              <div key={index} className="flex justify-end">
                <div className="bg-primary rounded-lg p-3 max-w-[70%]">
                  <p className="text-sm text-primary-foreground">
                    {message.content}
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <form onSubmit={handleSubmit} className="bg-muted/50 px-4 py-3 flex items-center gap-2">
        <div className="relative flex-1">
          <Textarea
            placeholder="Type your message..."
            className="rounded-lg pr-12 min-h-[64px]"
            rows={1}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={isLoading}
          />

          {!isLoading ? (
            <Button
              type="submit"
              size="icon"
              disabled={!input.trim() || isLoading}
              className="absolute bottom-3 right-3 rounded-full"
            >
              <SendIcon className="w-5 h-5" />
              <span className="sr-only">Send</span>
            </Button>
          ) : (
            <Button
              type="button"
              size="icon"
              disabled={!isLoading}
              onClick={() => setIsLoading(false)}
              className="absolute bottom-3 right-3 rounded-full"
            >
              <SquareIcon className="w-5 h-5" fill="white" />
              <span className="sr-only">Stop</span>
            </Button>
          )}
        </div>
      </form>
    </div>
  );
}
