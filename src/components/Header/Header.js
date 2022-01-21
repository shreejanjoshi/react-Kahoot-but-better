const Header = (props) => {
    return ( 
          <div className="h-20 w-full bg-black text-white">
              {props.title}
              {props.name}
          </div>
    );
};

export default Header;