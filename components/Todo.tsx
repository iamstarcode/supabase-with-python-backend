/**
 * v0 by Vercel.
 * @see https://v0.dev/t/jBe8EyOTvgH
 */

'use client';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { CardContent, Card } from '@/components/ui/card';

export default function Component() {
  return (
    <div className='p-4 space-y-4'>
      <h1 className='text-2xl font-bold'>Todo List</h1>
      <Card>
        <CardContent className='flex flex-row items-start gap-2 p-4'>
          <div className='space-y-2 leading-none'>
            <div className='flex items-center space-x-2'>
              <Checkbox defaultChecked id='todo1' />
              <Label htmlFor='todo1'>Todo Item 1</Label>
            </div>
            <p className='text-sm text-gray-500 dark:text-gray-400'>
              Created: 29th December 2023
            </p>
          </div>
          <Button className='ml-auto' variant='outline'>
            Delete
          </Button>
        </CardContent>
      </Card>
      <Card>
        <CardContent className='flex flex-row items-start gap-2 p-4'>
          <div className='space-y-2 leading-none'>
            <div className='flex items-center space-x-2'>
              <Checkbox id='todo2' />
              <Label htmlFor='todo2'>Todo Item 2</Label>
            </div>
            <p className='text-sm text-gray-500 dark:text-gray-400'>
              Created: 28th December 2023
            </p>
          </div>
          <Button className='ml-auto' variant='outline'>
            Delete
          </Button>
        </CardContent>
      </Card>
      <Card>
        <CardContent className='flex flex-row items-start gap-2 p-4'>
          <div className='space-y-2 leading-none'>
            <div className='flex items-center space-x-2'>
              <Checkbox id='todo3' />
              <Label htmlFor='todo3'>Todo Item 3</Label>
            </div>
            <p className='text-sm text-gray-500 dark:text-gray-400'>
              Created: 27th December 2023
            </p>
          </div>
          <Button className='ml-auto' variant='outline'>
            Delete
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
