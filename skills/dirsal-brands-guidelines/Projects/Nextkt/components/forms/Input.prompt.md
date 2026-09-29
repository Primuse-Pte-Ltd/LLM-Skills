One-line: auth/checkout text field — caps label, leading Material Symbol, teal 2px focus ring.

```jsx
<Input label="Email" type="email" placeholder="you@example.com" icon={<span className="ms">mail</span>} />
<Input label="Phone" placeholder="+62 812 3456 7890" icon={<span className="ms">call</span>} hint="Used for ticket delivery by SMS" />
<Input label="Password" type="password" icon={<span className="ms">lock</span>} error="Incorrect email or password" />
```

Labels are UPPERCASE `label-caps` in `on-surface-variant`; leading icons use `outline` grey. Focus = teal border + `ring-2 ring-primary`. Phone placeholders use the Indonesian E.164 example (`+62 812 3456 7890`) — the storefront's home market.
