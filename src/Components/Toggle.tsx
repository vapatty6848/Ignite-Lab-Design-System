import React from 'react';

import { Switch as ToggleBoxComponent } from 'antd';

export interface ToggleProps {
  disabled?: boolean;
  onClick?: () => void;
  loading?: boolean;
  defaultChecked?: boolean;
  checkedChildren?: string | any;
  unCheckedChildren?: string | any;
  size?: 'small' | 'default';
}

export function Toggle({
  disabled = false,
  size,
  onClick,
  loading = false,
  defaultChecked = false,
  checkedChildren,
  unCheckedChildren,
  ...props
}: ToggleProps) {
  return (
    <ToggleBoxComponent
    className='bg-[#5768FF ]'
      disabled={disabled}
      onClick={onClick}
      data-testid='toggle'
      loading={loading}
      defaultChecked={true}
      checkedChildren={checkedChildren}
      unCheckedChildren={unCheckedChildren}
      size={size}
      {...props}
    />
  );
}