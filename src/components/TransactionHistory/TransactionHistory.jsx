import css from "./TransactionHistory.module.css";
function TransactionHistory({ items }) {
  return (
    <>
      <table className={css.table}>
        <thead>
          <tr>
            <th className={css.th}>Type</th>
            <th className={css.th}>Amount</th>
            <th className={css.th}>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(({ id, type, amount, currency }) => {
            return (
              <tr key={id} className={css.tr}>
                <td className={css.td}>{type}</td>
                <td className={css.td}>{amount}</td>
                <td className={css.td}>{currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
export default TransactionHistory;
