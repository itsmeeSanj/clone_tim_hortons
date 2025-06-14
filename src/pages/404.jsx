import { Space } from "antd";

import Buttons from "@/components/Buttons";
import baggel from "@/assets/baggle.svg";

function PageNotFound() {
  return (
    <div className='py-12 text-center w-1/5 mx-auto'>
      <img src={baggel} alt='' />
      <h2 className='font-bold mb-2'>Whoops !</h2>
      <p className='text-[.9375rem] font-semibold leading-normal'>
        The page you were looking for was moved or doesn't exist
      </p>

      <Space direction='vertical' className='w-full'>
        <Buttons type='primary' shape='round' size='large' block={true}>
          Homepage
        </Buttons>
        <Buttons shape='round' size='large' block={true} color='primary'>
          Refresh
        </Buttons>
      </Space>
    </div>
  );
}

export default PageNotFound;
