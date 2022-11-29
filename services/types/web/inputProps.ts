export type InputProps = {
  isError: boolean
  isDisabled?: boolean
  value: string;
  isRequired?: boolean
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  label: string
  name: string
  type: string
  leftIcon?: React.ReactNode
}

export type formProps = {
  name: string;
  email: string;
  message: string;
};
