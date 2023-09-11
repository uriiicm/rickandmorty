import React from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useDispatch } from 'react-redux';

export function CircularPagination() {
  const [active, setActive] = React.useState(1);
  const dispatch = useDispatch();
  const getItemProps = (index) =>
    ({
      variant: active === index ? "filled" : "text",
      color: "gray",
      onClick: () =>{ 
          setActive(index);
          handlePageChange(index);
        },
      className: "rounded-full",
    } );
 
const next = () => {
    if (active === 5) return;
 
    setActive(active +1);
    handlePageChange(active+1);
};

const prev = () => {
    if (active === 1) return;
    
    setActive(active-1);
    handlePageChange(active-1);
  };
  const handlePageChange = (newPage) => {
    // Enviar una acción para actualizar la página actual en Redux
    dispatch({ type: 'SET_CURRENT_PAGE', payload: newPage });
  }; 
  return (
    <div className="flex items-center justify-center gap-4 mb-5">
      <Button
        variant="text"
        className="flex items-center gap-2 rounded-full"
        onClick={prev}
        disabled={active === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
      </Button>
      <div className="flex items-center gap-2">
        <IconButton {...getItemProps(1)}>1</IconButton>
        <IconButton {...getItemProps(2)}>2</IconButton>
        <IconButton {...getItemProps(3)}>3</IconButton>
        <IconButton {...getItemProps(4)}>4</IconButton>
        <IconButton {...getItemProps(5)}>5</IconButton>
      </div>
      <Button
        variant="text"
        className="flex items-center gap-2 rounded-full"
        onClick={next}
        disabled={active === 5}
      >
        Next
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </Button>
    </div>
  );
}