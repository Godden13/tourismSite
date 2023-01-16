import './PackageBtn.css';

export default function PackageBtn() {
  return (
    <div className="PackageBtn__Body">
      <button type="button" className="PackageBtn_element">
        &lang;
      </button>
      <button type="button" className="PackageBtn_element">
        &rang;
      </button>
    </div>
  );
}
