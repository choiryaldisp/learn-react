import { useLocation } from "react-router-dom";

export const withRouter = WrappedComponent => props => {
    const location = useLocation();
  
    return <WrappedComponent {...props} location={location} />;
};
