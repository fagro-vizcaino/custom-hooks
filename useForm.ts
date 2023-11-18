// {
//   username: "",
//   email: "",
//   password: "",

import { ChangeEvent, useState } from "react";

// }
export function useForm(initialForm = {}) {
  const [formState, setFormState] = useState(initialForm);

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const handleReset = () => {
    setFormState(initialForm);
  };
  return {
    ...formState,
    formState,
    handleChange,
    handleReset,
  };
}
