import AButtons from './AButtons'
import { Outlet } from 'react-router-dom';

export default function Apod() {
  return (
    <>
<div className='apodPage'>
      <AButtons />
      <div className="content_flexbox2">
        <Outlet />
      </div>
</div>
    </>
  );
}