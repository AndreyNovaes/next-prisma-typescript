export const mailValidator = (email: string) => {
  const regex = '^(.+)@(.+)$'
  return email.match(regex)
}