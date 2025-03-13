"use client"

import UserTooltip from '@/components/workflow/UserTooltip'

type UserTooltip = {
  color: string;
  fullName: string;
}

const BoardControls = ({ users }: { users: UserTooltip[] }) => {
  return (
    <article className="flex justify-between items-center gap-3 py-5">
      <section className="flex items-center gap-3 flex-1 w-full">
        <h4>Your team members:</h4>

        <div className="flex">
          {users.map((user, index) => 
            <UserTooltip key={user.fullName} user={user} className={`z-${index * 10}`} />
          )}

          <UserTooltip isDefault={true} />
        </div>
      </section>
    </article>
  );
};

export default BoardControls;