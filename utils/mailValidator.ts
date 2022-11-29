// just a simple email validator
// is used in contacts page, to fill forms with a valid email
//
export const mailValidator = (email: string) => {
  const regex = '^(.+)@(.+)$'
  return email.match(regex)
}