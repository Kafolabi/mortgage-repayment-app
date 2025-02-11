/**
 * ErrorMessage component displays an error message if the error prop is true.
 *
 * @component
 * @param {Object} props - The props object.
 * @param {boolean} props.error - A boolean indicating whether there is an error.
 * @returns {JSX.Element|null} The error message element or null if no error.
 */
export default function ErrorMessage({ error }) {
  return error ? (
    <>
      <p className="text-sm text-left text-red mt-[-0.7rem] mb-5 peer-invalid:visible">
        This field is required
      </p>
    </>
  ) : null;
}
