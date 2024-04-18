import React from 'react';
import { Breadcrumb } from 'antd';
import { Link } from 'react-router-dom';
import './StyleBread.scss'

interface BreadProps {
  title: string;
  more?: string
  name?: string
}

const Bread: React.FC<BreadProps> = ({ title, more, name }) => {

  return (
    <Breadcrumb
      items={[
        {
          title: <Link to={'/'}>Home</Link>,
        },
        {
          title: title,  
        },
        {
          title: more
        },
        {
          title: name
        }
      ]}
    />
  );
};

export default Bread;
