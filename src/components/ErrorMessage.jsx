export default function ErrorMessage({ error }) {
  return error ? (
    <>
      <p className="text-sm text-left text-red mt-[-0.7rem] mb-5 peer-invalid:visible">
        This field is required
      </p>
    </>
  ) : null;
}
