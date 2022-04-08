itemCollection
.get()
.then((QuerySnapshot ) => {
    if (QuerySnapshot.size ===0){
        console.log("no data");
    }
    setProducts(
        QuerySnapshot.docs.map((doc) =>{
        return { id: doc.id,...doc.data()};
        })
    );
})
.catch((error) =>{
    console.log("error de busqueda", error);
})
.finally(() => {
    setLoading(false);
});

