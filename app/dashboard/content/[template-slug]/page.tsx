"use client";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import { TEMPLATE } from "../../_components/TemplateListSection";
import Templates from "@/app/(data)/Templates";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { response } from "@/utils/AiModel";
import { useState, use, useContext } from "react";
import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { useUser } from "@clerk/nextjs";
import moment from "moment";
import { TotalUsageContext } from "@/app/(context)/TotalUsageContext";
import { useRouter } from "next/navigation";
import { UserSubscriptionContext } from "@/app/(context)/UserSubscriptionContext";
import { UpdateCredit } from "@/app/(context)/UpdateCreditContext";


interface PROPS {
  params: Promise<{
    "template-slug": string;
  }>;
}

const CreateNewContent = ({ params }: PROPS) => {
  const { "template-slug": slug } = use(params);

  const selectedTemplate: TEMPLATE | undefined = Array.isArray(Templates)
    ? Templates.find(
        (item) => typeof item.slug === "string" && item.slug === slug
      )
    : undefined;

  const [loading, setLoading] = useState(false);
  const [aiOutput, setAiOutput] = useState<string>("");
  const { user } = useUser();
  const router = useRouter();
  const {totalUsage, setTotalUsage} = useContext(TotalUsageContext);
  const {userSubscription, setUserSubscription}=useContext(UserSubscriptionContext)
  const {updateCredit, setUpdateCredit}=useContext(UpdateCredit)

  const generateAiContent = async (formData: any) => {
    if(totalUsage >= 10000 && !userSubscription){
      alert("please upgrade your credit point was over");
      router.push("dashboard/billing")
      return;
    }
    setLoading(true);
    const selectedPrompt = selectedTemplate?.aiPrompt;
    const finalPrompt = JSON.stringify(formData) + ", " + selectedPrompt;

    try {
      const result = await response(finalPrompt);
      console.log(result);
      setAiOutput(result);
      await saveInDb(formData, selectedTemplate?.slug, result);
    } catch (error) {
      console.error("Error generating AI content:", error);
      setAiOutput("Failed to generate content.");
    } finally {
      setLoading(false);
      setUpdateCredit(Date.now())
    }
  };

  const saveInDb = async (formData: any, slug: any, aiResp: string) => {
    if (!user?.id || !slug || !aiResp) return;

    const result=await db.insert(AIOutput).values({
      formData: JSON.stringify(formData), // ✅ correct key
      templateSlug: slug,
      aiResponse: aiResp,
      createdBy: user?.primaryEmailAddress?.emailAddress || "unknown",
      createdAt: moment().format("DD/MM/YYYY"),
    });
    console.log(result);
    
  };

  if (!selectedTemplate) {
    return (
      <div className="p-5 text-red-500 font-semibold">Template not found.</div>
    );
  }

  return (
    <div className="p-5">
      <Link href={"/dashboard"}>
        <Button className="bg-purple-600 hover:bg-green-600 cursor-pointer">
          <ArrowLeft /> Back
        </Button>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-3">
        <FormSection
          selectedTemplate={selectedTemplate}
          userFormInput={generateAiContent}
          loading={loading}
        />
        <div className="col-span-2">
          <OutputSection output={aiOutput} />
        </div>
      </div>
    </div>
  );
};

export default CreateNewContent;



















// "use client";
// import FormSection from "../_components/FormSection";
// import OutputSection from "../_components/OutputSection";
// import { TEMPLATE } from "../../_components/TemplateListSection";
// import Templates from "@/app/(data)/Templates";
// import { ArrowLeft } from "lucide-react";
// import { Button } from "@/components/ui/button";
// import Link from "next/link";
// import { response } from "@/utils/AiModel";
// import { useState, use } from "react";
// import { db } from "@/utils/db";
// import { AIOutput } from "@/utils/schema";
// import { useUser } from "@clerk/nextjs";
// import moment from "moment";

// interface PROPS {
//   params: Promise<{
//     "template-slug": string;
//   }>;
// }

// const CreateNewContent = ({ params }: PROPS) => {
//   const { "template-slug": slug } = use(params);

//   const selectedTemplate: TEMPLATE | undefined = Array.isArray(Templates)
//     ? Templates.find(
//         (item) => typeof item.slug === "string" && item.slug === slug
//       )
//     : undefined;

//   const [loading, setLoading] = useState(false);
//   const [aiOutput, setAiOutput] = useState<string>("");
//   const { user } = useUser();

//   const generateAiContent = async (formData: any) => {
//     setLoading(true);
//     const selectedPrompt = selectedTemplate?.aiPrompt;
//     const finalPrompt = JSON.stringify(formData) + ", " + selectedPrompt;

//     try {
//       const result = await response(finalPrompt);
//       console.log(result);
//       setAiOutput(result);
//       await saveInDb(formData, selectedTemplate?.slug, result);
//     } catch (error) {
//       console.error("Error generating AI content:", error);
//       setAiOutput("Failed to generate content.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   const saveInDb = async (formData: any, slug: any, aiResp: string) => {
//      if (!user?.id) return;
//     const result = await db.insert(AIOutput).values({
//       formData: JSON.stringify(formData),
//       templateSlug: slug,
//       aiResponse: aiResp,
//       createdBy:user?.primaryEmailAddress?.emailAddress,
//       createdAt: moment().format("DD/MM/YYYY"),
//     });
//   };

//   if (!selectedTemplate) {
//     return (
//       <div className="p-5 text-red-500 font-semibold">Template not found.</div>
//     );
//   }

//   return (
//     <div className="p-5">
//       <Link href={"/dashboard"}>
//         <Button className="bg-purple-600 hover:bg-green-600 cursor-pointer">
//           <ArrowLeft /> Back
//         </Button>
//       </Link>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-5 py-3">
//         <FormSection
//           selectedTemplate={selectedTemplate}
//           userFormInput={generateAiContent}
//           loading={loading}
//         />
//         <div className="col-span-2">
//           <OutputSection output={aiOutput} />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CreateNewContent;



