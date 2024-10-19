import { Link } from 'next-view-transitions';

export default function AdminPage() {
  return (
    <div>
      <p>Admin</p>
      <Link href={"/de/admin/photo/1"}>Link</Link>
    </div>
  );
}
