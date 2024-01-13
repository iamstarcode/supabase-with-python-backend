'use client';

import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { CardContent, Card } from '@/components/ui/card';
import { createClient } from '@/utils/supabase/client';
import { useEffect, useState } from 'react';

export default function Component() {
  const supabase = createClient();
  const [todos, setTodos] = useState<any[] | null>([]);

  useEffect(() => {
    async function getTodos() {
      const todos = await supabase.from('todos').select('*');
      setTodos(todos.data);
    }

    getTodos();
  }, []);

  console.log(todos);
  return (
    <div className='p-4 space-y-4'>
      <h1 className='text-2xl font-bold'>Todo List</h1>
      {todos !== null ? (
        todos.map((todo: any) => (
          <>
            <Card id={todo.id}>
              <CardContent className='flex flex-row items-start gap-2 p-4'>
                <div className='space-y-2 leading-none'>
                  <div className='flex items-center space-x-2'>
                    <Checkbox id='todo1' className='peer' />
                    <Label
                      htmlFor='todo1'
                      className='text-lg text-foreground/90 peer-checked:line-through font-semibold hover:cursor-pointer'
                    >
                      {todo.description}
                    </Label>
                  </div>
                  <p className='text-sm text-gray-500 dark:text-gray-400'>
                    {new Intl.DateTimeFormat('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                      hour: 'numeric',
                      minute: 'numeric',
                    }).format(new Date(todo.created_at))}
                  </p>
                </div>
                <Button className='ml-auto' variant='outline'>
                  Delete
                </Button>
              </CardContent>
            </Card>
          </>
        ))
      ) : (
        <p>No todos</p>
      )}
    </div>
  );
}
