import { Button, Space } from "antd";

function PageNotFound() {
  return (
    <div className='text-center w-1/4 mx-auto'>
      <h1 className='text-2xl font-bold'>Whoops !</h1>
      <p className='text-base font-medium'>
        The page you were looking for was moved or doesn't exist
      </p>

      <Space direction='vertical' className='w-full'>
        <Button type='primary' size='large' block shape='round'>
          Homepage
        </Button>
        <Button type='default' size='large' shape='round' block>
          Refresh
        </Button>
      </Space>
    </div>
  );
}

export default PageNotFound;
