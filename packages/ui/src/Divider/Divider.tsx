import classNames from 'classnames';
import React from 'react';

export interface DividerProps {
  className?: string;
}

const Divider: React.FC<DividerProps> = ({ className, ...props }) => {
  return <div className={classNames('sk-divider', className)} {...props} />;
};

export default Divider;
