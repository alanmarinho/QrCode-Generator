import { BiLogoReact, BiLogoTypescript, BiLogoTailwindCss } from 'react-icons/bi';
import { AiOutlineAntDesign } from 'react-icons/ai';
import { SiVite } from 'react-icons/si';
import { Popover } from 'antd';

const App: React.FC = () => {
  return (
    <>
      <div className="flex items-center justify-center bg-purple-500 min-h-[10%] gap-10">
        <Popover content={<a href='https://react.dev/' target='_blank'>React</a>}>
          <BiLogoReact className="text-purple-100 text-xl" />
        </Popover>
        <Popover content={<a href='https://www.typescriptlang.org/' target='_blank'>TypeScript</a>}>
          <BiLogoTypescript className="text-purple-100 text-xl" />
        </Popover>
        <Popover content={<a href='https://vitejs.dev/' target='_blank'>Vite Js</a>}>
          <SiVite className="text-purple-100 text-xl" />
        </Popover>
        <Popover content={<a href='https://ant.design/' target='_blank'>Ant Design</a>}>
          <AiOutlineAntDesign className="text-purple-100 text-xl" />
        </Popover>
        <Popover content={<a href='https://tailwindcss.com/' target='_blank'>Tailwind Css</a>}>
          <BiLogoTailwindCss className="text-purple-100 text-xl" />
        </Popover>
      </div>
    </>
  );
}

export default App;