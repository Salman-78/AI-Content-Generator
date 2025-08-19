"use client";
import React, { useState } from "react";
import { TEMPLATE } from "../../_components/TemplateListSection";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2Icon } from "lucide-react";

interface PROPS {
  selectedTemplate?: TEMPLATE;
  userFormInput: any;
  loading: boolean;
}

const FormSection = ({ selectedTemplate, userFormInput, loading }: PROPS) => {
  const [formData, setFormData] = useState<any>({}); // ✅ initialize correctly

  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    userFormInput(formData);
  };

  return (
    <div className="p-3 shadow-md hover:shadow-green-600 border rounded-lg bg-white">
      {selectedTemplate?.icon && (
        <Image src={selectedTemplate.icon} alt="icon" width={70} height={70} />
      )}
      <h2 className="font-bold text-2xl mb-4 mt-2 text-purple-600">
        {selectedTemplate?.name}
      </h2>
      <p className="text-gray-500 text-sm">{selectedTemplate?.desc}</p>

      <form className="mt-5" onSubmit={onSubmit}>
        {selectedTemplate?.form?.map((item, index) => (
          <div key={index} className="my-2 flex flex-col gap-2 mb-7">
            <label className="font-bold">{item.label}</label>
            {item.field == "input" ? (
              <Input
                name={item.name}
                required={item?.required}
                onChange={handleInputChange}
              />
            ) : item.field == "textarea" ? (
              <Textarea
                name={item.name}
                required={item?.required}
                onChange={handleInputChange}
                className="w-full h-20"
              />
            ) : null}
          </div>
        ))}
        <Button
          type="submit"
          className="w-full py-6 bg-purple-600 hover:bg-green-600"
          disabled={loading}
        >
          {loading && <Loader2Icon className="animate-spin" />}
          Generate Content
        </Button>
      </form>
    </div>
  );
};

export default FormSection;







// "use client";
// import React, { useState } from "react";
// import { TEMPLATE } from "../../_components/TemplateListSection";
// import Image from "next/image";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import { Button } from "@/components/ui/button";
// import { Loader2Icon } from "lucide-react";

// interface PROPS {
//   selectedTemplate?: TEMPLATE;
//   userFormInput:any
//   loading:boolean
// }
// const FormSection = ({ selectedTemplate, userFormInput, loading }: PROPS) => {

//   const [formData, setFormData]=useState<any>();
  
//   const handleInputChange =(event:any)=>{
//     const {name, value}=event.target;
//     setFormData({...formData, [name]:value})
//   }

//   const onSubmit = (e: any) => {
//     e.preventDefault();
//     userFormInput(formData)
//   };

//   return (

//     <div className="p-3 shadow-md hover:shadow-green-600 border rounded-lg bg-white">
//       {selectedTemplate?.icon && (
//         <Image src={selectedTemplate.icon} alt="icon" width={70} height={70} />
//       )}
//       <h2 className="font-bold text-2xl mb-4 mt-2 text-purple-600">
//         {selectedTemplate?.name}
//       </h2>
//       <p className="text-gray-500 text-sm">{selectedTemplate?.desc}</p>

//       <form className="mt-5" onSubmit={onSubmit}>
//         {selectedTemplate?.form?.map((item, index) => (
//           <div key={index} className="my-2 flex flex-col gap-2 mb-7">
//             <label className="font-bold">{item.label}</label>
//             {item.field == "input" ? (
//               <Input name={item.name} required={item?.required} onChange={handleInputChange}/>
//             ) : item.field == "textarea" ? (
//               <Textarea name={item.name} required={item?.required} onChange={handleInputChange} className="w-full h-20"/>
//             ) : null}
//           </div>
//         ))}
//         <Button
//           type="submit"
//           className="w-full py-6 bg-purple-600 hover:bg-green-600"
//           disabled={loading}
//         >
//           {loading && <Loader2Icon className="animate-spin" /> }
//           Generate Content
//         </Button>
//       </form>
//     </div>
//   );
// };

// export default FormSection;