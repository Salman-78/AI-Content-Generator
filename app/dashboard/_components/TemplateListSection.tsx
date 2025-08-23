import Templates from "@/app/(data)/Templates";
import React, { useEffect, useState } from "react";
import TemplateCard from "./TemplateCard";

export interface TEMPLATE {
  name: string;
  desc: string;
  category: string;
  icon: string;
  aiPrompt: string;
  slug: string;
  form?: FORM[];
}
export interface FORM {
  label: string;
  field: string;
  name: string;
  required?: boolean;
}

const TemplateListSection = ({ userSearchInput }: any) => {

  const [templateList, setTemplateList] = useState(Templates);

  useEffect(() => {
    if(userSearchInput){
        const filterData=Templates.filter(item=>item.name.toLowerCase().includes(userSearchInput.toLowerCase()))
        setTemplateList(filterData);
    }
    else{
        setTemplateList(Templates)
    }
  }, [userSearchInput]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-2 mx-3 p-3">
      {templateList.map((item: TEMPLATE, index: number) => (
        <TemplateCard key={item.slug || index} {...item} />
      ))}
    </div>
  );
};

export default TemplateListSection;




// import Templates from "@/app/(data)/Templates";
// import React, { useEffect, useState } from "react";
// import TemplateCard from "./TemplateCard";

// export interface TEMPLATE {
//   name: string;
//   desc: string;
//   category: string;
//   icon: string;
//   aiPrompt: string;
//   slug: string;
//   form?: FORM[];
// }
// export interface FORM {
//   label: string;
//   field: string;
//   name: string;
//   required?: boolean;
// }

// const TemplateListSection = ({ userSearchInput }: any) => {

//   const [templateList, setTemplateList] = useState(Templates);

//   useEffect(() => {
//     if(userSearchInput){
//         const filterData=Templates.filter(item=>item.name.toLowerCase().includes(userSearchInput.toLowerCase()))
//         setTemplateList(filterData);
//     }
//     else{
//         setTemplateList(Templates)
//     }
//   }, [userSearchInput]);

//   return (
//     <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-2 mx-3 p-3">
//       {templateList.map((item: TEMPLATE, index: number) => (
//         <TemplateCard key={item.slug || index} {...item} />
//       ))}
//     </div>
//   );
// };

// export default TemplateListSection;
