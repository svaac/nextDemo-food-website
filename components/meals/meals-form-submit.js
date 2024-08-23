"use client";
import { useFormStatus } from "react-dom";
function MealsFormSubmit() {
  const { pending } = useFormStatus();
  return (
    <button disables={pending}>{pending ? "Submitting" : "Share Meal"}</button>
  );
}

export default MealsFormSubmit;
