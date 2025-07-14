import { notFound } from "next/navigation";
import {
  projectCategories,
  iconSlugMap,
  animationMap,
} from "@/data/projectCategories";
import FAQSection from "@/components/custom/FAQSection";
import HeroCTA from "@/components/custom/Hero-cta";

export default async function ProjectCategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const categoryObj = projectCategories.find(
    (cat) => cat.slug === category
  );

  if (!categoryObj) return notFound();

  const AnimationComponent = animationMap[categoryObj.slug];

  return (
    <>
      <div className="flex flex-row items-start mb-10 p-6 gap-10">
        <div className="w-2/3 h-screen sticky top-0">
          <div className="z-50">
            <h1 className="text-xl font-semibold mt-20 mb-16 text-[#9c7bfd]">
              {categoryObj.name}
            </h1>
            <p className="text-6xl font-bold text-gray-600">
              {categoryObj.description}
            </p>
          </div>
          <div className="">{AnimationComponent && <AnimationComponent />}</div>
        </div>

        <div>
          <h1 className="text-6xl font-semibold text-[#9c7bfd]">
            <span>{categoryObj.name}</span> Included
          </h1>
          <div className="flex flex-col justify-center items-center mt-4 gap-5">
            {categoryObj.techStack.map((techStack) => {
              const icon = iconSlugMap[techStack.title];
              return (
                <div
                  key={techStack.title}
                  className="w-1/2 rounded-xl p-6 flex flex-col items-center justify-center text-center"
                >
                  {icon && (
                    <div
                      dangerouslySetInnerHTML={{ __html: icon.svg }}
                      style={{ width: 100, height: 100, fill: "#9c7bfd" }}
                      className="mb-2"
                    />
                  )}
                  <h2 className="text-2xl font-semibold mb-2">
                    {techStack.title}
                  </h2>
                  <p className="text-gray-500">{techStack.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="container my-40 mx-auto px-4 py-8">
        <HeroCTA />
      </div>
      <div className="space-y-0 border border-gray-200 rounded-lg">
        <FAQSection allowMultipleOpen={false} />
      </div>
    </>
  );
}

export async function generateStaticParams() {
  return projectCategories.map((cat) => ({ category: cat.slug }));
}
