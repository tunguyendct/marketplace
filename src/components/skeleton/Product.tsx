const SkeletonProduct = () => {
  return (
    <div className="rounded-[0.625rem] bg-slate/60 p-4 space-y-6">
      <div className="rounded overflow-hidden relative bg-neutral animate-pulse before:block pt-[100%]"></div>
      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <div className="h-7 bg-neutral w-1/2 rounded-sm animate-pulse"></div>
          <div className="h-7 bg-neutral w-12 rounded-sm animate-pulse"></div>
        </div>
        <div className="flex items-center gap-x-3">
          <div className="relative w-8 h-8 block rounded-full bg-neutral animate-pulse"></div>
          <div className="h-4 w-32 bg-neutral animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}

export default SkeletonProduct
