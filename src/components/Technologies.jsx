import { RiReactjsLine } from "react-icons/ri";
import { SiRedux } from "react-icons/si";
import { SiJavascript } from "react-icons/si";
import { DiHtml5 } from "react-icons/di";
import { DiCss3 } from "react-icons/di";
import { RiTailwindCssFill } from "react-icons/ri";

function Technologies() {
  return (
    <div className="pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-col items-center gap-10">
        {/* Frontend Technologies */}
        <div className="flex flex-col items-center">
          <div className="flex flex-wrap justify-center gap-8">
            <div className="flex flex-col items-center p-4">
              <RiReactjsLine className="text-7xl text-cyan-500" />
              <span className="mt-2 text-lg font-semibold text-gray-700">
                React
              </span>
            </div>
            <div className="flex flex-col items-center p-4">
              <SiRedux className="text-7xl text-purple-600" />
              <span className="mt-2 text-lg font-semibold text-gray-700">
                Redux
              </span>
            </div>
            <div className="flex flex-col items-center p-4">
              <SiJavascript className="text-7xl text-yellow-400" />
              <span className="mt-2 text-lg font-semibold text-gray-700">
                JavaScript
              </span>
            </div>
            <div className="flex flex-col items-center p-4">
              <DiHtml5 className="text-7xl text-orange-500" />
              <span className="mt-2 text-lg font-semibold text-gray-700">
                HTML5
              </span>
            </div>
            <div className="flex flex-col items-center p-4">
              <DiCss3 className="text-7xl text-blue-500" />
              <span className="mt-2 text-lg font-semibold text-gray-700">
                CSS3
              </span>
            </div>
            <div className="flex flex-col items-center p-4">
              <RiTailwindCssFill className="text-7xl text-blue-600" />
              <span className="mt-2 text-lg font-semibold text-gray-700">
                Tailwind CSS
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
