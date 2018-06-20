CreditCard
==============

The `CreditCard` component serves as a container for a selectable credit card list item, and can display a stored credit card (passed as `card` prop) _or_ a placeholder such as a new card form (passed as `children`).

The `StoredCard` component is a representation of a single credit card, used internally to render the `card` passed to `CreditCard`, but can also be used independently or as a child of the `CreditCard`.

## `<CreditCard>`

### Usage

Example credit card selection list:

```jsx
import CreditCard from 'components/credit-card';

export default ( { cards, selectedId, onSelectCard } ) => {
    return cards.map( card => (
        <CreditCard
            key={ card.id }
            card={ card }
            selected={ card.id === selectedId }
            onSelect={ onSelectCard }
        />
    ) );
};
```

### Props

Name | Type | Description
-- | -- | --
`card` | `shape(StoredCard props)` | Object in the shape of `<StoredCard>` props below.
`selected` | `bool` | Whether the card item should appear selected.
`onSelect` | `func` | Handler called with event argument upon selecting card item.
`className` | `string` | Extra custom class names to pass to element.

## `<StoredCard>`

### Usage

Example usage within `<CreditCard>`:

```jsx
import StoredCard from 'components/stored-card';

export default ( cardData, onRemoveCard ) => {
    return (
        <CreditCard>
            <StoredCard { ...cardData } />
            <Button onClick={ onRemoveCard }>Remove</Button>
        </CreditCard>
    );
};
```

### Props

All props are required.

Name | Type | Description
-- | -- | --
`card` | `string` | Last digits of card number.
`cardType` | `string` | Card type (e.g. `visa`).
`name` | `string` | Name on card (e.g. `James Smith`).
`expiry` | `string` | Expiration date in MM/YY form.