interface ContainerProps extends ChildrenJsxProp {
  customJsx?: JSX.Element;
}

const Container = ({ children }: ContainerProps): JSX.Element => {
  return <div className="w-full grid grid-cols-3 gap-4">{children}</div>;
};

export default Container;
