import { Button } from '@/components/shadcn/ui/button';
import Label from '@/components/shared/ui/Label';

export default function Home() {
  return (
    <>
      <Button variant="outline">Button</Button>

      <div>
        <Label variant="primary" size="lg">
          Primary Label
        </Label>
        <Label variant="secondary" size="sm">
          Secondary Label
        </Label>
        <Label variant="success">Success Label</Label>
        <Label variant="error">Error Label</Label>
        <Label variant="warning">Warning Label</Label>
      </div>
    </>
  );
}
