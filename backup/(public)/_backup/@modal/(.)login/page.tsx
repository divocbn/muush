/** Thats kinda weird, maybe use route aliases? */
import PublicLoginComponent from "../../login/component";

export default function PublicLoginPage() {
  return (
    <div>
      <p>Component rendered as modal</p>
      <PublicLoginComponent />
    </div>
  );
}
