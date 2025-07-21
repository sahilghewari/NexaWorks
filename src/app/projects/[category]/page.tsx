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
      <div className="flex flex-col md:flex-row items-start mb-6 md:mb-10 p-2 sm:p-4 md:p-6 gap-4 md:gap-10 bg-[#F5F5F5] rounded-2xl shadow-lg">
        <div className="w-full md:w-2/3 md:h-screen md:sticky md:top-0 mb-6 md:mb-0">
          <div className="z-50">
            <h1 className="text-base sm:text-lg md:text-xl font-semibold mt-6 sm:mt-10 md:mt-20 mb-4 sm:mb-8 md:mb-16 text-[#31312f]">
              {categoryObj.name}
            </h1>
            <p className="text-xl sm:text-3xl md:text-6xl font-bold text-[#31312f] break-words">
              {categoryObj.description}
            </p>
          </div>
          <div className="mt-4">{AnimationComponent && <AnimationComponent />}</div>
        </div>

        <div className="w-full md:w-auto">
          <h1 className="text-2xl sm:text-3xl md:text-6xl font-semibold text-[#31312f] mb-3 sm:mb-4">
            <span className="text-[#C8C8C8]">{categoryObj.name}</span> <span className="text-[#31312f]">Projects</span>
          </h1>
          {/* Responsive Project Grid */}
          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8 w-full">
            {categoryObj.projects?.map((project) => (
              <div key={project.title} className="bg-white rounded-xl shadow border border-[#C8C8C8] flex flex-col items-center p-2 sm:p-4">
                <div className="w-full aspect-[16/9] mb-3 sm:mb-4 overflow-hidden rounded-lg flex items-center justify-center bg-[#E4E4E4]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full max-h-40 sm:max-h-48 rounded-lg transition-transform duration-300 hover:scale-105"
                    style={{ minHeight: '120px' }}
                  />
                </div>
                <h2 className="text-base sm:text-lg font-semibold text-[#31312f] mb-1 sm:mb-2 text-center">{project.title}</h2>
                <p className="text-[#31312f] opacity-80 text-center text-xs sm:text-sm">{project.summary}</p>
              </div>
            ))}
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-6xl font-semibold text-[#31312f] mt-6 sm:mt-8">
            <span className="text-[#C8C8C8]">{categoryObj.name}</span> <span className="text-[#31312f]">Included</span>
          </h1>
          <div className="flex flex-col justify-center items-center mt-3 sm:mt-4 gap-3 sm:gap-5">
            {categoryObj.techStack.map((techStack) => {
              const icon = iconSlugMap[techStack.title];
              return (
                <div
                  key={techStack.title}
                  className="w-full md:w-1/2 rounded-xl p-3 sm:p-4 md:p-6 flex flex-col items-center justify-center text-center bg-[#E4E4E4] border border-[#C8C8C8]"
                >
                  {icon && (
                    <div
                      dangerouslySetInnerHTML={{ __html: icon.svg }}
                      style={{ width: 80, height: 80, fill: '#31312f' }}
                      className="mb-2"
                    />
                  )}
                  <h2 className="text-base sm:text-lg md:text-2xl font-semibold mb-1 sm:mb-2 text-[#31312f]">
                    {techStack.title}
                  </h2>
                  <p className="text-[#31312f] opacity-80 text-xs sm:text-sm md:text-base">{techStack.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="container my-20 md:my-40 mx-auto px-2 md:px-4 py-6 md:py-8">
        <HeroCTA />
      </div>
      <div className="space-y-0 border border-[#C8C8C8] rounded-lg bg-[#F5F5F5]">
        <FAQSection allowMultipleOpen={false} />
      </div>
    </>
  );
}

export async function generateStaticParams() {
  return projectCategories.map((cat) => ({ category: cat.slug }));
}
